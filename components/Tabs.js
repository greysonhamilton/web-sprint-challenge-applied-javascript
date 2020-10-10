// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const topicDiv = document.querySelector('div.topics');

axios.get('https://lambda-times-api.herokuapp.com/topics')

.then(({data: {topics}}) => {

    topics.forEach(topic => {

        const div = document.createElement('div');
        div.classList.add('tab');
        div.textConent = topic;

        topicDiv.appendChild(div);

        div.addEventListener('click', (e) => {

            const allCards = document.querySelectorAll('div.card')
            
            allCards.forEach(card => {
    
                card.style.display = 'none';
    
                if (topic === 'node.js') topic = 'node';
    
                chosenCard = document.querySelectorAll(`[category=${topic}]`);
    
                chosenCard.forEach(card => {
    
                    card.style.display = 'block'
                })
            })
        })

    })

    .catch(err => {

        alert('This does not comput!', err);

    })

});