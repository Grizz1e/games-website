const imgList = [
    {
        'id': 1,
        'type': 0,
        'url': 'https://cdn.discordapp.com/attachments/1113999040321962014/1113999581231976478/4dbke6ty493b1.png?ex=677345f5&is=6771f475&hm=93f6d022f416645e3796c5022df9edc925acd3bfd627b36b51c1188d5640bd69&',
    },
    {
        'id': 2,
        'type': 1,
        'url': 'https://cdn.discordapp.com/attachments/1113999068545425509/1113999332723667004/OIP.png?ex=677345ba&is=6771f43a&hm=695992aa88c2b0d620c5c8bec6eaf869cdd1429b3557003fd1800f0e349628a4&',
    },
    {
        'id': 3,
        'type': 0,
        'url': 'https://cdn.discordapp.com/attachments/1113999040321962014/1113999136845463552/ghf6dxynj12b1.png?ex=6773458b&is=6771f40b&hm=bc4be40b3d7687580e978571fb9b63f9252bf27567971ed2b4e5f4a75f575adb&',
    },
    {
        'id': 4,
        'type': 1,
        'url': 'https://cdn.discordapp.com/attachments/1113999068545425509/1114000341881589801/woman-590490_960_720.jpg?ex=677346aa&is=6771f52a&hm=1289d6d9dd6ea56eca4506ce18f04d1153ee526d1669199cb3c1d4af6b99bb5d&'
    },
    {
        'id': 5,
        'type': 0,
        'url': 'https://media.discordapp.net/attachments/1113999040321962014/1114000969164926996/n80c3oeghf3b1.png?ex=67734740&is=6771f5c0&hm=321b723d6e805eabc3f4f96798b6d2506ee1fbb6aef5fe4b5af9d6d35ceeeae6&=&format=webp&quality=lossless&width=350&height=350',
    },
    {
        'id': 6,
        'type': 1,
        'url': 'https://cdn.discordapp.com/attachments/1113999068545425509/1114007406645620746/Untitled.jpg?ex=67734d3f&is=6771fbbf&hm=092daad368f77f61c792126413740acc43946083d663ce29e356ff63280205a7&',
    },
    {
        'id': 7,
        'type': 1,
        'url': 'https://cdn.discordapp.com/attachments/1113999068545425509/1114008989458518066/Untitled.jpg?ex=67734eb8&is=6771fd38&hm=830b377dc20f9cbd429968d4055f1b8df38cb2dc45d11bea5bb1c285c28f5eb8&',
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
