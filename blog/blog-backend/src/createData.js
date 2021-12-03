import Post from './models/post';

export default function createData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: 'text',
    tags: ['fake', 'data'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
