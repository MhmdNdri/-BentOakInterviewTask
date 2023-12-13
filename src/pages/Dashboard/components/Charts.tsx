import React from 'react'
import { useQuery } from 'react-query'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts'

interface Post {
  userId: number
  id: number
  title: string
  body: string
  comments: Comment[]
}

interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments')
  const data = await response.json()
  return data
}
const Charts: React.FC = () => {
  const {
    data: posts = [],
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
  } = useQuery<Post[]>('posts', fetchPosts)

  console.log('Posts:', posts)

  const processChartData = (): { name: number; comments: number }[] => {
    return posts.map(post => ({
      name: post.id,
      comments: post.comments ? post.comments.length : 0,
    }))
  }

  const {
    data: lineChartData,
    isLoading,
    isError,
  } = useQuery<{ name: number; comments: number }[]>('lineChartData', processChartData)

  console.log('Line Chart Data:', lineChartData)

  if (isLoadingPosts) return <p>Loading posts...</p>
  if (isErrorPosts) return <p>Error fetching posts</p>

  if (isLoading) return <p>Loading chart data...</p>

  if (isError) {
    console.error('Error fetching chart data:', isError)
    return <p>Error fetching chart data. Check the console for details.</p>
  }

  if (!lineChartData) {
    console.error('No chart data available:', lineChartData)
    return <p>No chart data available. Check the console for details.</p>
  }

  return (
    <div>
      <h2>Charts</h2>

      <div>
        <h3>Line Chart</h3>
        <LineChart
          width={900}
          height={600}
          data={lineChartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="comments" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>
  )
}

export default Charts
