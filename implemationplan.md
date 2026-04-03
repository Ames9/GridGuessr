GridGuesser 実装プラン
NFLスタジアムの地理知識を問う、マップ・ピンポイント推測ゲームをNext.jsで構築します。

技術スタック
項目	採用技術
Framework	Next.js 14 (App Router)
Styling	Tailwind CSS
Map	react-simple-maps + d3-geo
Animation	framer-motion
Icons	lucide-react
Data	locations.csv → locations.json に変換して使用
ファイル構成
GridGuessr/
├── app/
│   ├── layout.tsx          # ルートレイアウト (フォント・メタデータ)
│   ├── page.tsx            # ゲームのメインページ
│   └── globals.css         # グローバルCSS (Tailwind)
├── components/
│   ├── GridMap.tsx         # アメリカ地図コンポーネント
│   ├── GameHeader.tsx      # ラウンド表示・スタジアム名
│   ├── ScoreDisplay.tsx    # スコア・アニメーション
│   └── ResultScreen.tsx    # 全問終了後リザルト画面
├── lib/
│   ├── geoUtils.ts         # ハバシン公式・スコア計算
│   └── locations.ts        # スタジアムデータ定義
├── hooks/
│   └── useGameState.ts     # ゲーム状態管理フック
├── public/
│   └── us-states.json      # US州地図TopoJSON (CDN or local)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
主要コンポーネント設計
lib/locations.ts
locations.csvのデータをTypeScriptオブジェクトに変換：

homeTeamAbbr, lat, lng, name（チーム名の完全表記）を持つ
PHIのデータ（lat: 36.9）は実際のLincoln Financial Fieldの座標に修正
lib/geoUtils.ts
haversineDistance(lat1, lng1, lat2, lng2): number → マイル換算
calcScore(distanceMiles): number → 5000点満点、距離に応じて減点
0マイル → 5000点
50マイル以内 → 4999〜4500点
500マイル超 → 1000点以下
1500マイル超 → 0点
hooks/useGameState.ts
ts
type GameState = {
  phase: 'playing' | 'result' | 'finished'
  round: number         // 1〜5
  questions: Stadium[]  // ランダム5問
  userPins: LatLng[]    // ユーザーの回答
  scores: number[]      // 各ラウンドのスコア
  currentPin: LatLng | null
}
主要アクション：

placePin(lat, lng) → 仮ピン設置
confirmAnswer() → スコア計算、result フェーズへ
nextRound() → 次の問題へ
restart() → ゲームリセット
components/GridMap.tsx
ComposableMap + Geographies でアメリカ地図描画
投影法: geoAlbersUsa
クリック位置の緯度経度を取得
ユーザーピン（青）・正解ピン（赤）・両者を結ぶ線を表示
結果フェーズ時のみ正解ピンと線を表示
ゲームフロー
START
  ↓
[ランダム5問選択]
  ↓
[playing フェーズ]
  - 問題表示
  - 地図クリック → 仮ピン
  - 確定ボタン → confirmAnswer()
  ↓
[result フェーズ]
  - 正解ピン表示
  - 距離 & スコアのカウントアップアニメーション
  - 「次へ」ボタン
  ↓
3問終了？ → YES → [finished フェーズ]
            NO  → 次のラウンドへ
  ↓
[finished フェーズ]
  - 合計スコア表示
  - ランク表示（地理マニア度）
  - もう一度プレイボタン
スコア・ランク基準
合計スコア	ランク
23000〜25000	🏟️ NFL地理マスター
18000〜22999	🏈 スタジアム通
12000〜17999	📍 なんとなく知ってる
6000〜11999	🗺️ アメリカ初心者
0〜5999	😅 勘で生きている
Open Questions
IMPORTANT

PHIのデータが lat: 36.9, long: -75.1（バージニアビーチ付近）になっています。これはLincoln Financial Field（フィラデルフィア: 39.9, -75.17）の誤りと思われます。自動修正してよいですか？

NOTE

LAとLACが同じ座標（SoFi Stadium）になっています。ゲームで両チームが同じ問題として出た場合、区別できないため、片方（LAC）を除外するか、問題文に「このスタジアムを使用するチームの一つは？」のような形式にするか選べます。どうしますか？

NOTE

現在33チーム分のデータがあります（LA / LAC は同スタジアム）。ゲームで毎回5問だけランダム出題する設計でよいですか？

Verification Plan
Automated
npm run build でビルドエラーがないことを確認
npm run dev でローカル動作確認
Manual
地図クリックでピンが正しく表示される
スコア計算が距離に応じて正しく行われる
5問完了後にリザルト画面が表示される
モバイル表示でも操作できる