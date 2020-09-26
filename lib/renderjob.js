var state=[]
var result = [];
var search = document.getElementById('search');
var select = document.getElementById('type');
function loadJson (){
	const url ='http://my-json-server.typicode.com/mkazemiraz/job-blog-fakeDB/jobs';
	return new Promise((resolve,reject)=>{
		let res = $.ajax(url);
		if(res){
		resolve(res)
		}else{
		reject(new Error ('Api done or bad request'))
		}
	})
}
async function loadJob(){
	let loadjob = await loadJson();
	state= loadjob;
	renderJobs(state);
}
 function renderJobs(jobs){
	let html = '';
	console.log(jobs);
	jobs.forEach(job => {
		let htmlseg = 
	`<div class="user">
		<img src="${job.logo}" >
		<a href="./Job.html" class="text-primary">${job.jobTitle}</a>
		 <div class="userdetail">
		   <div>شرکت :${job.companyName}</div>
		   <div><span class="badge badge-info badge-pill m-1">${job.location}</span></div>
		   <div><span class="badge badge-warning badge-pill m-1">${job.contractType}</span></div>
		   <div><span class="badge badge-danger badge-pill m-1">Urgent: ${job.urgent}</span></div>
		 </div>
		</div>	
	</div>`;
		html+= htmlseg;
	});
	let jobslenght = jobs.length ;
	let container = document.querySelector('.jobContainer');
	container.innerHTML = html;
	document.querySelector('.jobshow').innerHTML = `Job Listed : ${jobslenght}`;
	
}
function finder (input, select){
	console.log(input)
	let finds = [];
    switch(select) {
        case "teh":
            for(var i = 0; i < state.length; i++) {
                if(state[i].jobTitle.includes(input)&&state[i].location==='تهران') {
                    finds.push(state[i]);
                }
            }
            break;
        case "other":
            for(var i = 0; i < state.length; i++) {
                if(state[i].jobTitle.includes(input)&&state[i].location!='تهران' ) {
                    finds.push(state[i]);
                }
            }
            break;
			case "all":
            for(var i = 0; i < state.length; i++) {
                if(state[i].jobTitle.includes(input)) {
                    finds.push(state[i]);
                }
            }
    }
	result=finds;
}
loadJob();


function eventHandler() {
	finder(search.value, select.value);
    renderJobs(result);
}
search.addEventListener('keyup', eventHandler);
select.addEventListener('change', eventHandler);
// jobTitle: "برنامه‌نویس Front-End",
// companyName: "ایده پردازان",
// location: "تهران",
// contractType: "تمام وقت",
// logo: "https://picsum.photos/200/300?random=1",
// urgent: true