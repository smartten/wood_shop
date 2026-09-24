import "../Blog/BlogStyle.scss";
import { RightOutlined } from "@ant-design/icons";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Navigate, useParams } from "react-router-dom";
import { mediaUrl, useCms } from "../../api/cms";
import { useSite } from "../../context/SiteContext";
import { formatPostDate } from "../Blog/Blog";

function BlogPost() {
  const { slug } = useParams();
  const { global } = useSite();
  const { data, error } = useCms(`posts?filters[slug][$eq]=${encodeURIComponent(slug)}`);

  if (error) return <div style={{ padding: 40 }}>Could not load content: {error.message}</div>;
  if (!data) return null;
  const post = data[0];
  if (!post) return <Navigate to="/blog" replace />;

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
      <section className="post-detail">
        <div className="container">
          <p className="time-new">
            {[formatPostDate(post.publishDate), post.category].filter(Boolean).join(" - ")}
          </p>
          <h1>{post.title}</h1>
          {post.cover && <img src={mediaUrl(post.cover)} alt={post.title} />}
          {post.content && <BlocksRenderer content={post.content} />}
        </div>
      </section>
    </div>
  );
}

export default BlogPost;
