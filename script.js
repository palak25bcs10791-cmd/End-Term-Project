
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let currentGoal = localStorage.getItem('savingsGoal') || 1000;
let currentFilter = 'all';


const list = document.getElementById('transaction-list');
const form = document.getElementById('transaction-form');
const balanceDisplay = document.getElementById('balance');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const goalValDisplay = document.getElementById('goal-val');
const notification = document.getElementById('notification');


function updateUI() {

    const filtered = transactions.filter(t => {
        if (currentFilter === 'all') return true;
        return t.type === currentFilter;
    });


    list.innerHTML = '';
    filtered.forEach(addTransactionToDOM);

 
    const total = transactions.reduce((acc, t) => {
        return t.type === 'income' ? acc + t.amount : acc - t.amount;
    }, 0);

    balanceDisplay.innerText = `$${total.toFixed(2)}`;
    balanceDisplay.style.color = total < 0 ? 'var(--expense)' : 'var(--text)';
    
    const percentage = Math.max(0, Math.min((total / currentGoal) * 100, 100));
    progressFill.style.width = `${percentage}%`;
    progressText.innerText = `${Math.round(percentage)}% to goal`;
    goalValDisplay.innerText = `$${currentGoal}`;
}

function addTransactionToDOM(t) {
    const item = document.createElement('li');
    item.classList.add('transaction-item', `${t.type}-border`);
    
    item.innerHTML = `
        <div>
            <strong>${t.desc}</strong>
            <small style="display:block; color:#888">${t.type.toUpperCase()}</small>
        </div>
        <div>
            <span style="color: ${t.type === 'income' ? 'var(--income)' : 'var(--expense)'}">
                ${t.type === 'income' ? '+' : '-'}$${t.amount.toFixed(2)}
            </span>
            <button class="delete-btn" data-id="${t.id}" style="margin-left:10px; cursor:pointer">×</button>
        </div>
    `;
    list.appendChild(item);
}

function showNotification(msg) {
    notification.innerText = msg;
    notification.classList.remove('hide');
    setTimeout(() => notification.classList.add('hide'), 3000);
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const desc = document.getElementById('desc').value;
    const amount = +document.getElementById('amount').value;
    const type = document.getElementById('type').value;

    if (desc.trim() === '' || amount <= 0) {
        showNotification("Please enter valid details!");
        return;
    }

    const newTransaction = { id: Date.now(), desc, amount, type };
    transactions.push(newTransaction);
    
    localStorage.setItem('transactions', JSON.stringify(transactions));
    form.reset();
    updateUI();
    showNotification("Transaction Added!");
});

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const id = e.target.getAttribute('data-id');
        transactions = transactions.filter(t => t.id != id);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        updateUI();
        showNotification("Item Removed");
    }
});


document.getElementById('update-goal-btn').addEventListener('click', () => {
    const newGoal = document.getElementById('goal-input').value;
    if (newGoal > 0) {
        currentGoal = newGoal;
        localStorage.setItem('savingsGoal', currentGoal);
        updateUI();
        showNotification("Goal Updated!");
    }
});


document.querySelector('.filter-controls').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-filter');
        updateUI();
    }
});
updateUI();