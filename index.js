function showmessage(){
    
    document.getElementById("message").textContent = "Happy mother's day!"
}
function Moremessage() {
    document.getElementById("message2").textContent ="You are beautiful, wonderful and amazing!"

}
function onelasttime() {
    
    const section = document.getElementById("display")

    const music = document.createElement("audio")
    music.src ="music/Chopin - Etude Op. 10 No. 3 (Tristesse)-yt.savetube.me.mp3"
    
    const message = document.createElement("p")
    message.textContent ="Dear mum, i love you very much and i thank God each day for you being my mum i love you so much and i pray that God may give you all that your heart desires.!!!!"

    const image = document.createElement("img")
    image.src ="images/Mother.jpeg"
    image.alt = "my beautiful mother"
    
    const finalmessage = document.createElement("p")
    finalmessage.textContent = "Your loving family"

    section.appendChild(music)
    section.appendChild(message)
    section.appendChild(image)
    section.appendChild(finalmessage)
music.play()
music.loop = true
}