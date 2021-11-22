const LinksSocialMedia = {
  github: 'gmonteiro677',
  youtube: 'GabrieldoVrau',
  instagram: 'gabrielcosta',
  facebook: 'gabriel costa',
  twitter: 'gabriel costa'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // userName.textContent = data.name
      //userBio.textContent = data.bio
      userLink.href = data.html_url
      // UserImage.src = data.avatar_url
      //userLogin.textContent = data.Login
    })
}

getGithubProfileInfos()
