let dispalyTable = document.querySelector("#dispaly");
let titleInput = document.querySelector("#title")
let bodyInput = document.querySelector("#body")

currentEditingId = null

console.log(dispalyTable)
let blogTable = [
    {
        Id: 1,
        Title: "first title",
        Body: "first body"
    },


    {
        Id: 2,
        Title: "Second title",
        Body: "Second body",
    }


]

function show() {
    dispalyTable.innerHTML = ""
    blogTable.forEach((post) => {
        dispalyTable.innerHTML += `
        <tr>
        <td>${post.Id}</td>
        <td>${post.Title}</td>
        <td>${post.Body}</td>
        <td>
        <button class="btn btn-primary" onclick="editBlog(${post.Id})">Edit</button>
        <button  class="btn btn-danger" onclick="deleteBlog(${post.Id})">Delete</button>
        </td>
        </tr>
        `

    })

}

function onSave(event) {
    event.preventDefault();

    // console.log('adfsdfsd');

    if (currentEditingId) {
        //update and edit
        let elementIndex = blogTable.findIndex((blogIndex) => blogIndex.id == currentEditingId)
        blogTable[elementIndex].Title = titleInput.value
        blogTable[elementIndex].Body = bodyInput.value
        currentEditingId = null;

    } else {
        // save
        let blogsInput = {
            Id: blogTable.length + 1,
            Title: titleInput.value,
            Body: bodyInput.value,
        }
        console.log(blogsInput);
        blogTable.push(blogsInput)
        console.log(blogTable);
    }
    show();

    titleInput.value = "";
    bodyInput.value = "";

}
show();

function editBlog(Id) {
    let singleElement = blogTable.find((blog) => blog.Id == Id);
    titleInput.value = singleElement.Title;
    bodyInput.value = singleElement.Body;
    currentEditingId = Id;
}

function deleteBlog(Id) {
    blogTable = blogTable.filter((blog) => blog.Id !== Id);
    console.log(blogTable);
    show();

}




