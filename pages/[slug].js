import React from 'react'


const Post = ({ slug }) => {
  return (
    <div>the slug for this page is : {slug}</div>
  )
}

export const getStaticPaths = async () => {
  const pages = ['main', 'additional', 'additional2']


  const paths = pages.map(page => ({
    params: {
      slug: page
    }
  }))


  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async ({ params: { slug } }) => {

  console.log(1)

  return {
    props: {
      slug
    }
  }
}


export default Post