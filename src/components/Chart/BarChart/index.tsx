import { ResponsiveBar } from '@nivo/bar'
import { FC } from 'react'

interface chartData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
  width: number
  height: number
  color: string
}

export const BarChart: FC<chartData> = ({ data, width, height, color }) => {
  return (
    <div style={{ height: `${height}px`, width: `${width}px` }}>
      <ResponsiveBar
        data={data}
        enableGridX={false}
        enableGridY={false}
        keys={['value']}
        indexBy="month"
        colors={[color]}
      />
    </div>
  )
}
