// get the wrapper that holds the list
wrap = document.querySelector('#recommendations_tab_main_feed');
// grab the NodeList collection of divs with role article
articleList = [...wrap
	.querySelectorAll('div[role="article"]')]
	// remove the ones with aria-label="Comment"
	.filter(elem => !elem.getAttribute('aria-label'))
	.map(element => {
		const profileLink = element.querySelector('.profileLink');
		const name = profileLink.textContent;
		const u = element.querySelector('u');
		const rating = u && parseFloat(u.textContent) || 5;
		const time = element.querySelector('.timestampContent').textContent;
		const userId = profileLink.href.split('?').reduce(p=>p).split('/').pop();
		const postId = element.querySelector('._5pcq').href.split('/').pop().split(':').reduce(a=>a);
		const paragraph = element.querySelector('p');
		const text = paragraph && paragraph.textContent || '';

		return {
			name,
			rating,
			time,
			userId,
			postId,
			text
		}
	})
    
console.log(articleList)