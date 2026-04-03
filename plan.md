# Project Specification: GridGuesser (Updated)

## 1. Project Overview
「GridGuesser」は、NFLおよびカレッジフットボールの聖地（スタジアム、大学、名所など）の地理的知識を問う、Webブラウザ向けのマップ・ピンポイント推測ゲームです。
ユーザーはお題となるテキストを見て、アメリカの白地図上の正しい位置を推測してタップし、正解の座標との「距離のズレ（マイル）」を基にスコアを獲得します。

## 2. Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Map Rendering:** `react-simple-maps`
- **Map Data:** TopoJSON (US Atlas) - `https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json` などを利用
- **Icons:** `lucide-react`
- **Deployment:** Vercel

## 3. Core Features & User Flow
1. **問題提示フェーズ:**
   - 画面上部に現在のお題（例: "Round 1/5: Lambeau Field"）を表示。
2. **ピン刺しフェーズ:**
   - `react-simple-maps` を使用して、アメリカの州境を描画した白地図を表示。xx
   - 地図上をタップすると、その位置の緯度・経度を取得し、仮のピンを表示する。
3. **結果判定フェーズ:**
   - 確定ボタン押下後、正解の座標にピンを表示し、ユーザーのピンとの間に線を引く。
   - ハバシン公式（Haversine formula）を用いて、2点間の直線距離（マイル）を算出。
   - 距離に応じたスコア（0〜5000点）を表示。
4. **リザルト:**
   - 全5問終了後、合計スコアと「地理マニア度」のランクを表示。

## 4. Implementation Details (Geo Data)
- **Map Source:** `ComposableMap`, `Geographies`, `Geography` コンポーネントを使用して、TopoJSONからアメリカ地図を生成してください。投影法は `geoAlbersUsa` を推奨します。
- **Coordinate Handling:** - `react-simple-maps` の `onMoveEnd` や `onClick` イベントから、座標（Longitude, Latitude）を取得するロジックを実装してください。
  - お題データは以下のフラットなJSON形式で管理します。

```json
[
  {
    "id": 1,
    "name": "Lambeau Field (Green Bay Packers)",
    "type": "NFL",
    "lat": 44.5013,
    "lng": -88.0622
  },
  {
    "id": 2,
    "name": "LSU Tiger Stadium",
    "type": "NCAA",
    "lat": 30.4120,
    "lng": -91.1838
  }
]
``` 
## 5. UI/UX Guidelines
Responsive Design: マップは画面幅に合わせてスケーリングし、スマホでもピンが刺しやすいサイズ感を維持すること。

Minimalist Aesthetic: 州の塗りつぶしは薄いグレー（#f3f4f6）、境界線は白（#ffffff）など、清潔感のあるデザインにすること。

Animation: 距離とスコアのカウントアップ表示には framer-motion 等を使用してスムーズな演出を入れること。

## 6. Instructions for AI Assistant
react-simple-maps と d3-geo を導入し、アメリカの白地図を描画する GridMap コンポーネントを作成してください。

クリックした地点の緯度経度を取得し、マーカーを表示する機能を実装してください。

lib/geoUtils.ts を作成し、ハバシン公式による距離計算ロジックを実装してください。

ラウンド管理（1/5問目など）とスコア計算を行う GameContext または useGameState フックを作成してください。


### 💡 ヒント：データ収集について
開発の初期段階では、上記のJSONにある `lat`（緯度）と `lng`（経度）のサンプルデータを使って「動くもの」を作ることに集中してください。

システムが動くようになったら、私に「セインツの過去5年の対戦相手のスタジアムの座標リストを作って」や「カレッジフットボールの主要6カンファレンスのスタジアムリストを作って」と指示をくれれば、そのまま貼り付けられる形式でデータを提供します。

GridGuesserの完成、楽しみにしています！まずはこのmdファイルを渡して、プロジェクトを立ち上げてみてください。