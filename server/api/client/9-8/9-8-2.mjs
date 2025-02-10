window.onload = async () => {
    const tableBody = document.getElementById("userTable");

    try {
        const response = await fetch("http://localhost:3000/api/sample2");
        if (!response.ok) throw new Error("データの取得に失敗しました");
        const users = await response.json();

        users.forEach(user => {
            const row = document.createElement("tr");
            Object.values(user).forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
};
