<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;


class Authenticate
{
    public function handle(Request $request, Closure $next)
    {
        if (!auth()->check()) {
            return redirect()->route('login.main');
        }

        return $next($request);
    }
}
