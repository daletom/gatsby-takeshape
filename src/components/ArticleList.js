import React from "react";
import { Link } from "gatsby";
import { getImageUrl } from "takeshape-routing";
import parse from "html-react-parser"
import Imgix from "react-imgix";

const ArticleListItem = ({ article }) => {
    return(
		<Link to="/">
				<p class="text-2xl p-2">{parse(article.title)}</p>
			<Imgix
				src={getImageUrl(article.heroimage.path)}
				imgixParams={{ fit: "crop", crop: "faces,edges", ar: "1.8:1", auto: "format,compress"}}
				sizes="(min-width: 1024px) calc(33vw - 60px), (min-width: 768px) calc(50vw - 100px), calc(100vw - 70px)"
				loading="lazy"
			/>
			<p class="p-2">{parse(article.content)}</p>
		</Link>
    );
};

const ArticleList = ({ articles }) => (
    <div class="flex flex-wrap">
        {articles.items.map((article, i) => (
            <div class="p-4 lg:w-1/3 md:w-1/2 sm:w-full" key={i}>
                <ArticleListItem article={article} />
            </div>
        ))}
    </div>
);

export default ArticleList;
