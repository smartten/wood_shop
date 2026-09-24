import "./BlogStyle.scss";
import { RightOutlined } from "@ant-design/icons";
import { mediaUrl, useCms } from "../../api/cms";
import { useSite } from "../../context/SiteContext";

const CARDS_PER_ROW = 3;

export function formatPostDate(date) {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  return `${day}.${month}.${year}`;
}

function PostCard({ post }) {
  return (
    <div className="col-3">
      <div className="img-news">
        <img src={mediaUrl(post.cover)} alt={post.title} />
      </div>
      <div className="content-new">
        <p className="time-new">
          {[formatPostDate(post.publishDate), post.category].filter(Boolean).join(" - ")}
        </p>
        <p className="title-new">{post.title}</p>
        <p className="sub-new">{post.excerpt}</p>
        <a href={`/blog/${post.slug}`} className="more">
          More
        </a>
      </div>
    </div>
  );
}

function Blog() {
  const { global } = useSite();
  const { data: posts, error } = useCms("posts?sort=publishDate:desc&pagination[pageSize]=100");

  if (error) return <div style={{ padding: 40 }}>Could not load content: {error.message}</div>;
  if (!posts) return null;

  // The first row sits directly in the grid; later rows are nested rows.
  const rows = [];
  for (let i = 0; i < posts.length; i += CARDS_PER_ROW) {
    rows.push(posts.slice(i, i + CARDS_PER_ROW));
  }
  const [firstRow = [], ...otherRows] = rows;

  return (
    <div className="blog">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>{global.navBlog}</span>
                  </p>
                  <p className="breadcrumb-text">
                    {global.navHome} <RightOutlined /> {global.navBlog}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <div className="row">
            {firstRow.map((post) => (
              <PostCard post={post} key={post.documentId} />
            ))}
            {otherRows.map((row, i) => (
              <div className="row" key={i}>
                {row.map((post) => (
                  <PostCard post={post} key={post.documentId} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
