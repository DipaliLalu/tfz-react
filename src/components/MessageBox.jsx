import React from 'react'
import { useState } from 'react';

function MessageBox() {
    const [text, setText] = useState('');
    const [status, setStatus] = useState('typing');

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');
        await sendMessage(text);
        setStatus('sent');
    }

    const isSending = status === 'sending';
    const isSent = status === 'sent';
    if (isSent) {
        return <h1>Thanks for feedback!</h1>
    }
    return (
        <>
            <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit}>
                <p>Enter your favourite color:</p>
                <textarea name="" id="" value={text} onChange={e => setText(e.target.value)} disabled={isSending}></textarea><br />
                <button disabled={isSending} className='btn btn-outline-primary'>submit</button>
                {isSending && <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}
            </form>
        </>

    )
}
function sendMessage(text) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
}
export default MessageBox
