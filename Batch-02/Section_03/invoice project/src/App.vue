<script setup>
import { reactive } from "vue";

const data = reactive({
  sender: '',
  billTo: '',
  shiptTo: '',
  invoiceNumber: '',
  date: '',
  dueDate: '',
  additionalNote: '',
  items: [
    {
      description: '',
      quantity: '',
      rate: '',
      amount: ''
    }
  ],
  notes: '',
  terms: '',
  subtotal: '',
  tax: '',
  total: ''
});

function addMore(){
  data.items.push({
    description: '',
    quantity: '',
    rate: '',
    amount: ''
  });
}

function getSubtotal(){
  let subtotal = 0;
  data.items.forEach( item => {
    subtotal += item.amount
  });
  data.subtotal = subtotal;
  return subtotal;
}

function getTotal(){
  const tax = data.subtotal * data.tax / 100;
  data.total = data.subtotal + tax; 
  return data.total; 
}
</script>

<template>
  <div class="wrap">

    <!-- Hero -->
    <div class="hero">
      <div class="hero-bg"></div>
      <div class="hero-top">
        <div>
          <div class="hero-word">Invoice</div>
          <div class="hero-sub">Studio Nord — Design &amp; Creative Services</div>
        </div>
        <div class="pill">№ <input type="text" placeholder="0142" /></div>
      </div>
      <div class="avatar">SN</div>
    </div>

    <!-- Card -->
    <div class="card">

      <div class="brand-line">
        <input type="text" placeholder="Studio Nord" value="Studio Nord" />
      </div>

      <div class="meta-row">
        <div>
          <span class="microlabel">Sender</span>
          <textarea v-model="data.sender" class="ghost" rows="2" placeholder="Your business address"></textarea>
        </div>
        <div>
          <span class="microlabel">Date</span>
          <input v-model="data.date" class="ghost" type="text" placeholder="18 Jul 2026" />
        </div>
        <div>
          <span class="microlabel">Due Date</span>
          <input v-model="data.dueDate" class="ghost" type="text" placeholder="01 Aug 2026" />
        </div>
      </div>

      <div class="parties">
        <div>
          <span class="microlabel">Bill To</span>
          <textarea v-model="data.billTo" class="ghost" rows="2" placeholder="Client name and address"></textarea>
        </div>
        <div>
          <span class="microlabel">Ship To</span>
          <textarea v-model="data.shiptTo" class="ghost" rows="2" placeholder="Shipping address"></textarea>
        </div>
        <div>
          <span class="microlabel">Additional Notes</span>
          <textarea v-model="data.additionalNote" class="ghost" rows="2" placeholder="Shipping address"></textarea>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th style="width:48%">Item</th>
            <th style="width:16%" class="num">Qty</th>
            <th style="width:18%" class="num">Rate</th>
            <th style="width:18%" class="num">Amount</th>
          </tr>
        </thead>
        <tbody id="itemsBody">
          <tr v-for="(item, index) in data.items">
            <td><input v-model="item.description" type="text" placeholder="Description of item or service" /></td>
            <td><input v-model="item.quantity" class="mono" type="text" placeholder="0" /></td>
            <td><input v-model="item.rate" class="mono" type="text" placeholder="0.00" /></td>
            <td class="amount">${{ item.amount = item.quantity * item.rate}}</td>
          </tr>
        </tbody>
      </table>

      <button @click="addMore()" class="add-item" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
        Add item
      </button>
      <div class="mb-8">
        {{data}}
      </div>

      <div class="lower">
        <div class="notes">
          <span class="microlabel">Notes</span>
          <textarea v-model="data.notes" class="ghost" rows="2" placeholder="Thank you for your business."></textarea>
          <span class="microlabel">Terms</span>
          <textarea v-model="data.terms" class="ghost" rows="2" placeholder="Payment due within 14 days."></textarea>
        </div>

        <div>
          <div class="subtax">
            <div class="row">
              <span>Subtotal</span>
              <input :value="getSubtotal()" type="text" placeholder="0.00" readonly/>
            </div>
            <div class="row">
              <span>Tax</span>
              <input v-model="data.tax" type="text" placeholder="0.00" />
            </div>
            <div class="row">
              <span>Total</span>
              <input type="text" placeholder="0.00" :value="getTotal()" readonly/>
            </div>
          </div>
          <div class="due-chip">
            <span class="lbl">Balance Due</span>
            <div class="amt">
              <span class="cur">$</span>
              <input type="text" placeholder="0.00"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style>
:root {
  --ink: #17181C;
  --muted: #8A8C92;
  --line: #EDEDEC;
  --v1: #7C3AED;
  --v2: #DB2777;
  --v3: #FB923C;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #F2F1EE;
  font-family: 'Inter', sans-serif;
  color: var(--ink);
  padding: 56px 20px 80px;
}

.wrap {
  max-width: 860px;
  margin: 0 auto;
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  height: 210px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  border-radius: 22px 22px 0 0;
  overflow: hidden;
  background:
    radial-gradient(circle at 15% 20%, var(--v3) 0%, transparent 45%),
    radial-gradient(circle at 85% 15%, var(--v2) 0%, transparent 50%),
    radial-gradient(circle at 55% 90%, var(--v1) 0%, transparent 60%),
    linear-gradient(120deg, var(--v1), var(--v2) 55%, var(--v3));
  background-size: 160% 160%;
  animation: drift 18s ease-in-out infinite alternate;
}

@media (prefers-reduced-motion: reduce) {
  .hero-bg {
    animation: none;
  }
}

@keyframes drift {
  0% {
    background-position: 0% 0%;
  }

  100% {
    background-position: 100% 60%;
  }
}

.hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px);
  background-size: 16px 16px;
  opacity: .25;
  mix-blend-mode: overlay;
}

.hero-top {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 26px 32px;
}

.hero-word {
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: #fff;
  letter-spacing: -0.01em;
}

.hero-sub {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 2px;
}

.pill {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  padding: 7px 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12.5px;
  color: #fff;
}

.pill input {
  border: none;
  background: transparent;
  color: #fff;
  width: 56px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12.5px;
  padding: 0;
}

.pill input:focus {
  outline: none;
}

.pill input::placeholder {
  color: rgba(255, 255, 255, 0.65);
}

.avatar {
  position: absolute;
  left: 32px;
  bottom: -30px;
  z-index: 3;
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--v1), var(--v2));
  border: 4px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 20px;
  box-shadow: 0 10px 24px -8px rgba(124, 58, 237, 0.45);
}

/* ---------- Card ---------- */
.card {
  background: #fff;
  border-radius: 0 0 22px 22px;
  box-shadow: 0 30px 60px -34px rgba(20, 20, 30, 0.28);
  padding: 52px 48px 44px;
}

.brand-line {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
}

.brand-line input {
  text-align: right;
  border: none;
  background: transparent;
  font-family: 'Sora', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: var(--ink);
  padding: 0;
  width: 220px;
}

.brand-line input:focus {
  outline: none;
}

.microlabel {
  font-size: 10.5px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 7px;
  display: block;
  font-weight: 500;
}

.ghost {
  border: none;
  border-bottom: 1px solid transparent;
  background: transparent;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 14.5px;
  color: var(--ink);
  padding: 3px 0 6px;
  resize: none;
  transition: border-color .15s ease;
}

.ghost:focus {
  outline: none;
  border-bottom-color: var(--v1);
}

.ghost::placeholder {
  color: #C9CACD;
}

.meta-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 26px;
  padding-bottom: 26px;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--line);
}

.parties {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
  margin-bottom: 38px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 12px;
}

thead th {
  text-align: left;
  font-size: 10.5px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 600;
  padding: 0 8px 12px;
  border-bottom: 1.5px solid var(--ink);
}

thead th.num {
  text-align: right;
}

tbody td {
  padding: 11px 8px;
  border-bottom: 1px solid var(--line);
}

tbody tr:last-child td {
  border-bottom: none;
}

tbody input {
  border: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  padding: 3px 0;
}

tbody input:focus {
  outline: none;
}

tbody input.mono {
  text-align: right;
  font-family: 'JetBrains Mono', monospace;
}

td.amount {
  text-align: right;
  font-family: 'JetBrains Mono', monospace;
  color: var(--ink);
}

.add-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, var(--v1), var(--v2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  border: none;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 13px;
  padding: 6px 0;
  margin-bottom: 40px;
}

.add-item svg {
  width: 14px;
  height: 14px;
  stroke: var(--v1);
}

.lower {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 40px;
  align-items: start;
}

.notes .microlabel {
  margin-top: 20px;
}

.notes .microlabel:first-child {
  margin-top: 0;
}

.subtax .row {
  display: flex;
  justify-content: space-between;
  padding: 9px 0;
  font-size: 13.5px;
  color: var(--muted);
  border-bottom: 1px solid var(--line);
}

.subtax .row input {
  border: none;
  background: transparent;
  text-align: right;
  width: 100px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13.5px;
  color: var(--ink);
}

.subtax .row input:focus {
  outline: none;
}

.due-chip {
  margin-top: 16px;
  border-radius: 16px;
  padding: 18px 20px;
  background: linear-gradient(120deg, var(--v1), var(--v2) 60%, var(--v3));
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 16px 30px -14px rgba(124, 58, 237, 0.45);
}

.due-chip .lbl {
  font-family: 'Sora', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: #fff;
}

.due-chip .amt {
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.due-chip .cur {
  color: rgba(255, 255, 255, 0.85);
  font-family: 'JetBrains Mono', monospace;
  font-size: 15px;
}

.due-chip input {
  border: none;
  background: transparent;
  text-align: right;
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: 20px;
  width: 110px;
}

.due-chip input:focus {
  outline: none;
}

.due-chip input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 720px) {
  .card {
    padding: 44px 24px 36px;
  }

  .meta-row {
    grid-template-columns: 1fr 1fr;
  }

  .parties {
    grid-template-columns: 1fr;
  }

  .lower {
    grid-template-columns: 1fr;
  }

  thead th:nth-child(2),
  tbody td:nth-child(2) {
    display: none;
  }

  .hero {
    height: 180px;
  }

  .hero-bg {
    border-radius: 16px 16px 0 0;
  }

  .avatar {
    left: 20px;
    bottom: -26px;
    width: 56px;
    height: 56px;
    border-radius: 16px;
  }

  .hero-word {
    font-size: 21px;
  }
}
</style
