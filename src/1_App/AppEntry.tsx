import React from 'react'
import ReactDOM from 'react-dom/client'
import BaseLayout from '@app/Layout/BaseLayout'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <BaseLayout />
        </BrowserRouter>
    </React.StrictMode>,
)
