import React, { Key } from 'react';
import { useEffect, useState } from 'react';

import { getAppProvider } from "@app/core/AppProvider"
import { Post } from '@app/core/models';

function getPostRow(post: Post) {
  return <tr key={post.id as Key}>
    <td>{post.title}</td>
  </tr>
}

function App() {

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {

    setPosts(
      getAppProvider().datastore.getAllPosts([])
    )

  }, []);

  return (
    <div>
      <table>
        <tbody>
          {posts.map(post => getPostRow(post))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
