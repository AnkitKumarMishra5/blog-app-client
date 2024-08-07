import { NextPageContext } from 'next';
import Router from 'next/router';

export const checkAuth = (ctx: NextPageContext) => {
    const token = ctx.req?.headers.cookie?.split('=')[1] || '';
    if (!token) {
        if (ctx.res) {
            ctx.res.writeHead(302, { Location: '/login' });
            ctx.res.end();
        } else {
            Router.push('/login');
        }
    }
    return token;
};