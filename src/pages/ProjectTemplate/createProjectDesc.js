function createProjectDesc(projectDesc) {
  //push description entries to HTML
  let PDescHTML = ``
  projectDesc.forEach(entry => {
    PDescHTML += `<p>${entry}</p>`
  })
  console.log(PDescHTML)
}
export default createProjectDesc
