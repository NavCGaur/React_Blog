//React import
import React from 'react';

//Style imports
import './blog.css';


//Named export Article
import {Article} from '../../components/index';

//importing images
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => (
  <div className="gpt4__blog section__padding" id="blog">
    <div className="gpt4__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt4__blog-container">
      <div className="gpt4__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-4 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt4__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3544 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-46767 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-4567 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-46765 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;
