'use strict';

async function loadBlogJson() {
	var result = {};
	try {
		result = await $.get('http://my-json-server.typicode.com/mkazemiraz/job-blog-fakeDB/blogPosts');
		console.log(result);
		return result;
	} catch (e) {
		console.error('API is Down or bad requested!');
	}
}
async function renderblog() {
	var posts = await loadBlogJson();
	var html = '';
	posts.forEach(function (post) {
		var temp = '<div class="col-md-3 postblog p-2 ">\n\t\t<div class="card bordershadow" >\n\t\t<img class="card-img-top" src="' + post.image + '" alt="Card image cap">\n\t\t<div class="card-body">\n\t\t <p class="card-title">' + post.title + '</p>\n\t\t <p class="card-text"><span class="badge badge-pill badge-primary">' + post.date + '</span></p>\n\t\t <span class="badge badge-pill badge-success"> comments :' + post.commentsCount + '\n\t\t</div>\n\t  </div>\n\t  </div>';

		html += temp;
	});
	$('#postsPart').append(html);
}
renderblog();