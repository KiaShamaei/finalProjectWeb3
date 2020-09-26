
async  function loadBlogJson(){
	let result;
try{
	result = await $.get('http://my-json-server.typicode.com/mkazemiraz/job-blog-fakeDB/blogPosts');
	console.log(result);
	return result ;

}catch(e){
console.error('API is Down or bad requested!')
}
} 
async function renderblog(){
	let posts = await loadBlogJson();
	html = '';
	posts.forEach(post => {
		let temp = `<div class="col-md-3 postblog p-2 ">
		<div class="card bordershadow" >
		<img class="card-img-top" src="${post.image}" alt="Card image cap">
		<div class="card-body">
		 <p class="card-title">${post.title}</p>
		 <p class="card-text"><span class="badge badge-pill badge-primary">${post.date}</span></p>
		 <span class="badge badge-pill badge-success"> comments :${post.commentsCount}
		</div>
	  </div>
	  </div>`
	
		html+=temp
	});
	$('#postsPart').append(html);
} 
renderblog();