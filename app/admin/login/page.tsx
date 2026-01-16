'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Lock, Mail } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export default function LoginPage() {
    const router = useRouter();
    const supabase = createClient();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) {
                toast.error(error.message);
                return;
            }

            toast.success("Welcome back!");
            router.push('/admin');
            router.refresh(); // Refresh server components
        } catch (err) {
            toast.error("An unexpected error occurred.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8 bg-zinc-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-xl">

                <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="scale-75 mb-4">
                        <Logo />
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Admin Portal</h2>
                    <p className="text-white/40 text-sm">Enter your credentials to access the dashboard.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-white/30" />
                            <Input
                                type="email"
                                placeholder="admin@sauditaxi.cab"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-10 bg-black/40 border-white/10 text-white placeholder:text-white/20 focus:border-luxury-gold"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70 ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-white/30" />
                            <Input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10 bg-black/40 border-white/10 text-white placeholder:text-white/20 focus:border-luxury-gold"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-luxury-gold text-black hover:bg-white font-bold"
                    >
                        {loading ? 'Authenticating...' : 'Sign In'}
                    </Button>
                </form>

            </div>
        </div>
    );
}
