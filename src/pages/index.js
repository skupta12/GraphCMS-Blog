import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { useState } from 'react';

export default function Home({ posts }) {
  const [featuredPosts, setFeaturedPosts] = useState([]);
 
  return (
    <div className="max-w-[1440px] mx-auto px-3 md:px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
        {featuredPosts && posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getServerSideProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
