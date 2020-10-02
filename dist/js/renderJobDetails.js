var jobtitle = $("#jobtitle1");
var jobCompany = $("#jobcompany");
var contractType = $("#contractTypeJob");
var uregentJob = $('#uregentJob');
var locationJob = $('#locationJob');
var jobdescription = $('#jobdescription');
var requirementJob = $('#requirementJob');
var logoJob = $('#logoJob');
var advantage = $('#advantageJob');
let stateDetail = {};

function loadJobDetail() {
  const jobDetail = "http://my-json-server.typicode.com/mkazemiraz/job-blog-fakeDB/jobDetails";
  return new Promise((resolve, reject) => {
    let res = $.ajax(jobDetail);

    if (res) {
      resolve(res);
    } else {
      reject(console.log(new Error("Api down or Bad requestd")));
    }
  });
}

async function renderJob() {
  let detail = await loadJobDetail();
  jobtitle.text(detail.title);
  jobCompany.text(detail.company);
  contractType.text(detail.contractType);
  uregentJob.text(`urgent: ${detail.uregent}`);
  locationJob.text(detail.location);
  jobdescription.text(detail.description);
  requirementJob.text(detail.requirement);
  logoJob.attr('src', detail.logo);
  advantage.text(detail.advantages);
  document.getElementById('jobtitle').innerHTML = `JoB : ${detail.title}`;
}

renderJob(); // title: "برنامه نویس Front-End",
// company: "کاوانو",
// contractType: "تمام وقت",
// logo: "https://picsum.photos/200/300?random=1",
// uregent: false,
// description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
// location: "تهران",
// requirement: [
// "تسلط کامل به JavaScript ،ES5, ES6",
// "تسلط کامل به React.JS",
// "تسلط کامل به Redux - JSX - Redux-Saga",
// "تسلط به CSS - HTML - Bootstrap",
// "تسلط به طراحی Responsive",
// "تسلط به تولید Modular Components",
// "کدنویسی خوانا، قابل نگهداری و مستند سازی کامل",
// "دارای مهارت حل مسئله",
// "توانایی کار تیمی"
// ],
// advantages: [
// "پرداخت حقوق و مزایای عالی، منظم و به موقع",
// "دارای بیمه تامین اجتماعی و بیمه عمر",
// "محاسبه اضافه کاری طبق قانون",
// "محل کار تهران جنت آباد جنوبی چهارراه لاله"