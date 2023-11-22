// script.js

const names = [
    "Aadi Agarwal",
    "Bhavya Patel",
    "Chhaya Sharma",
    "Dhruv Kumar",
    "Esha Singh",
    "Faisal Khan",
    "Geeta Rao",
    "Hitesh Joshi",
    "Ipsha Mehta",
    "Jai Patel",
    "Kavita Sharma",
    "Lalit Singh",
    "Madhu Chopra",
    "Naina Shah",
    "Om Prakash",
    "Priyanka Patel",
    "Qasim Ahmed",
    "Ritu Mehta",
    "Sagar Joshi",
    "Tanya Singh",
    "Umesh Patel",
    "Varun Sharma",
    "Waseem Khan",
    "Yash Patel",
    "Zoya Singh",
  ];
  
const pdfLinks = [
    "https://drive.google.com/file/d/1OTs0Mf36UxBFJ1NF4u8VpbbFYhY6dRaL/view?usp=sharing",
    "https://drive.google.com/file/d/1OTs0Mf36UxBFJ1NF4u8VpbbFYhY6dRaL/view?usp=sharing",
    "https://drive.google.com/file/d/1OTs0Mf36UxBFJ1NF4u8VpbbFYhY6dRaL/view?usp=sharing",
    // Add more PDF links here
];

const searchBar = document.getElementById("searchTerm");
const findButton = document.getElementById("findButton");
const pdfViewer = document.getElementById("pdf-viewer");
const downloadLinkContainer = document.getElementById("download-link");

findButton.addEventListener("click", () => {
    const searchTerm = searchBar.value.toLowerCase();
    const foundIndex = names.findIndex((name) => name.toLowerCase().includes(searchTerm));

    if (foundIndex !== -1) {
        const pdfLink = pdfLinks[foundIndex];
        const pdfEmbed = `<iframe src="${pdfLink}" width="100%" height="500px"/>`;

        pdfViewer.style.display = "block";
        pdfViewer.innerHTML = pdfEmbed;

        const downloadLink = `<a href="${pdfLink}" download>Download PDF</a>`;
        downloadLinkContainer.innerHTML = downloadLink;
    } else {
        pdfViewer.style.display = "none";
        downloadLinkContainer.innerHTML = "";
        alert("Record not found"); // Replace with your preferred notification method
    }
});
