import React from "react";
import {MathJaxContext} from "better-react-mathjax";
import {MathJax} from "better-react-mathjax";

import { Button } from "@/components/Button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import type { Node } from "@/types";

{/* import { Author } from "./Author"; */}
import { Comments } from "./Comments";
import { Content } from "./Content";
import { Meta } from "./Meta";
import { Tags } from "./Tags";

import * as styles from "./Post.module.scss";

interface Props {
  post: Node;
}

const Post: React.FC<Props> = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;


  return (
    <div className={styles.post}>
      <MathJaxContext>
      <div className={styles.buttons}>
        <Button className={styles.buttonArticles} title="All Articles" to="/" />
        <ThemeSwitcher />
      </div>

      <div className={styles.content}>
        <MathJax>
          <Content body={html} title={title} />
        </MathJax>
      </div>

      <div className={styles.footer}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
      </div>

      <div className={styles.comments}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
      </MathJaxContext>
    </div>
  );
};

export default Post;


