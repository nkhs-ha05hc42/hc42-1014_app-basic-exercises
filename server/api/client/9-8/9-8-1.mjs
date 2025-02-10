const users = [
    { id: 1, name: "山田", age: 23, postcode: "0620055", address: "北海道札幌市", averageScore: 81.5 },
    { id: 2, name: "田中", age: 18, postcode: "0590465", address: "北海道登別市", averageScore: 71 },
];

window.onload = () => {
    const tableBody = document.getElementById("userTable");
    if (!tableBody) {
        console.error("エラー: tableBody が見つかりません");
        return;
    }

    users.forEach(user => {
        const row = document.createElement("tr");
        Object.values(user).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
};
