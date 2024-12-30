const imgList = [
    {
        'id': 1,
        'type': 0,
        'url': 'https://cdn.discordapp.com/attachments/1113999040321962014/1113999581231976478/4dbke6ty493b1.png?ex=677345f5',
    },
    {
        'id': 2,
        'type': 1,
        'url': 'https://cdn.discordapp.com/attachments/1113999068545425509/1113999332723667004/OIP.png?ex=677345ba',
    },
    {
        'id': 3,
        'type': 0,
        'url': 'https://media.discordapp.net/attachments/1113999040321962014/1113999136845463552/ghf6dxynj12b1.png?ex=6773458b',
    },
    {
        'id': 4,
        'type': 1,
        'url': 'https://cdn.discordapp.com/attachments/1113999068545425509/1114000341881589801/woman-590490_960_720.jpg?ex=677346aa'
    },
    {
        'id': 5,
        'type': 0,
        'url': 'https://cdn.discordapp.com/attachments/1113999040321962014/1114000969164926996/n80c3oeghf3b1.png?ex=67734740',
    },
    {
        'id': 6,
        'type': 1,
        'url': 'https://cdn.discordapp.com/attachments/1113999068545425509/1114007406645620746/Untitled.jpg?ex=67734d3f',
    },
    {
        'id': 7,
        'type': 1,
        'url': 'https://cdn.discordapp.com/attachments/1113999068545425509/1114008989458518066/Untitled.jpg?ex=67734eb8',
    }
]
const imgContainer = document.querySelector('#img-container')
const aiBtn = document.querySelector('#ai-btn')
const realBtn = document.querySelector('#real-btn')
const nextBtn = document.querySelector('#next-btn')
const scoreElement = document.querySelector('#score')
const totalQsnElement = document.querySelector('#total-qsn')
let score = 0
let totalQsn = 0

let selectedIds = []
let filteredList = imgList.filter(img => !selectedIds.includes(img.id))
let selectedImg = filteredList[Math.floor(Math.random() * filteredList.length)]
selectedIds.push(selectedImg.id)

imgContainer.style.backgroundImage = `url('${selectedImg.url}')`

aiBtn.addEventListener('click', () => {
    totalQsn++
    totalQsnElement.textContent = totalQsn
    if (selectedImg.type === 0) {
        aiBtn.style.backgroundColor = 'limegreen'
        score++
        scoreElement.textContent = score
    } else {
        aiBtn.style.backgroundColor = 'rgb(241, 77, 77)'
    }
    aiBtn.disabled = true
    realBtn.disabled = true
    nextBtn.disabled = false
})

realBtn.addEventListener('click', () => {
    totalQsn++
    totalQsnElement.textContent = totalQsn
    if (selectedImg.type === 1) {
        realBtn.style.backgroundColor = 'limegreen'
        score++
        scoreElement.textContent = score
    } else {
        realBtn.style.backgroundColor = 'rgb(241, 77, 77)'
    }
    aiBtn.disabled = true
    realBtn.disabled = true
    nextBtn.disabled = false
})

nextBtn.addEventListener('click', () => {
    if (selectedIds.length === imgList.length) selectedIds = []
    filteredList = imgList.filter(img => !selectedIds.includes(img.id))
    selectedImg = filteredList[Math.floor(Math.random() * filteredList.length)]
    selectedIds.push(selectedImg.id)
    imgContainer.style.backgroundImage = `url('${selectedImg.url}')`

    let imgElement = new Image()
    imgElement.src = selectedImg.url
    imgElement.addEventListener('load', function () {
        let aspectRatio = imgElement.width / imgElement.height
        let maxHeight = parseFloat(getComputedStyle(imgContainer).width) / aspectRatio
        imgContainer.style.backgroundImage = `url('${selectedImg.url}')`
        imgContainer.style.height = maxHeight + 'px'
    })
    nextBtn.disabled = true
    aiBtn.disabled = false
    realBtn.disabled = false
    aiBtn.style.backgroundColor = ''
    realBtn.style.backgroundColor = ''
})

imgContainer.addEventListener('click', () => {
    imgContainer.classList.toggle('scale-1.5')
})
