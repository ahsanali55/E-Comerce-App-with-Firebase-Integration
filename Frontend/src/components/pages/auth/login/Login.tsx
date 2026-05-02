import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { motion } from "framer-motion";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import API from "../../../../Api/axios";
import { Button } from "../../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form";
import { Input } from "../../../ui/input";

const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  password: z.string().min(1, "Password is required."),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string>("");
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleClose = () => setOpen(false);

  const handleLogin = async (values: LoginFormValues) => {
    setServerError("");
    setOpen(true);

    try {
      const response = await API.post("/auth/login", values);

      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
      }

      navigate("/profile");
    } catch (error) {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message ?? error.message
        : "Something went wrong while logging in.";
      setServerError(message);
    } finally {
      setOpen(false);
    }
  };

  return (
    <>
      <div className="h-full w-full bg-[#E8ECF4]">
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="relative mx-auto flex h-screen w-11/12 max-w-[1080px] items-center justify-center">
            <Link
              to="/"
              className="absolute left-10 top-10 rounded-full bg-white p-5 text-2xl shadow-sm transition-colors hover:bg-gray-50"
              aria-label="Go back home"
            >
              <ChevronLeft />
            </Link>

            <div className="min-h-[400px] w-full max-w-[400px] rounded-xl bg-white p-7 shadow-2xl">
              <div className="mx-auto mt-4 flex w-[170px] border-4 p-0.5">
                <h1 className="bg-black px-2 font-extrabold text-white">
                  AHSAN
                </h1>
                <h1 className="px-2 font-extrabold">STORE</h1>
              </div>

              <Form {...form}>
                <form
                  className="mt-5 flex flex-col gap-3 p-4"
                  onSubmit={form.handleSubmit(handleLogin)}
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john123@example.com"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input
                              type={showPass ? "text" : "password"}
                              placeholder="Enter password"
                              autoComplete="current-password"
                              className="pr-10"
                              {...field}
                            />
                          </FormControl>
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
                            onClick={() => setShowPass((current) => !current)}
                            aria-label={showPass ? "Hide password" : "Show password"}
                          >
                            {showPass ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                          </button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {serverError && (
                    <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
                      {serverError}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="mt-3 w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Logging in..." : "Login"}
                  </Button>

                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-1 w-full"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>

      <Backdrop
        sx={(theme) => ({
          color: "#fff",
          zIndex: theme.zIndex.drawer + 1,
        })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress sx={{ color: "#535BF2" }} />
      </Backdrop>
    </>
  );
};

export default Login;
