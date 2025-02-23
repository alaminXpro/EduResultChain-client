'use client';
import IconLockDots from '@/components/icon/icon-lock-dots';
import IconMail from '@/components/icon/icon-mail';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { z } from 'zod';
import { toast } from "react-hot-toast";
import { useLogin } from "@/services/api";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const ComponentsAuthLoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { mutate: login, isPending } = useLogin();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validation = loginSchema.safeParse(formData);
    if (!validation.success) {
      validation.error.errors.forEach((err) => toast.error(err.message));
      return;
    }

    login(
      {
        ...formData,
        device_name: "web",
      },
      {
        onSuccess: () => {
          router.replace("/welcome");
        },
        onError: (error) => {
          toast.error(error.response?.data.message ?? "Something went wrong");
        },
      }
    );
  };

  return (
    <form className="space-y-5 dark:text-white" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <div className="relative text-white-dark">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter Username"
            className="form-input ps-10 placeholder:text-white-dark"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
          <span className="absolute start-4 top-1/2 -translate-y-1/2">
            <IconMail fill={true} />
          </span>
        </div>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <div className="relative text-white-dark">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            className="form-input ps-10 placeholder:text-white-dark"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <span className="absolute start-4 top-1/2 -translate-y-1/2">
            <IconLockDots fill={true} />
          </span>
        </div>
      </div>
      <div>
        <label className="flex cursor-pointer items-center">
          <input type="checkbox" className="form-checkbox bg-white dark:bg-black" />
          <span className="text-white-dark">Subscribe to weekly newsletter</span>
        </label>
      </div>
      <button type="submit" className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
        {isPending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
};

export default ComponentsAuthLoginForm;
