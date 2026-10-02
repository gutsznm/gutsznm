"use client";

import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
} from "react-icons/fi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="bg-[#f6f5f4] px-6 py-20 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-270">
        {/* CTA Header */}
        <div className="relative overflow-hidden rounded-xl bg-[#213183] px-6 py-12 text-white sm:px-10 sm:py-14">
          <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-sticker-sky/20" />
          <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-sticker-sky/10" />

          <div className="relative max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[12px] font-semibold text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-sticker-sky" />
              Open to opportunities
            </div>

            <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-1px] sm:text-[52px]">
              Punya project?
              <br />
              <span className="text-sticker-sky">Let&apos;s build it.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-[1.6] text-white/70">
              Terbuka untuk kesempatan kerja, freelance project, maupun
              kolaborasi seputar software engineering dan cloud computing.
            </p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Contact info */}
          <div className="rounded-xl border border-[#e6e6e6] bg-white p-6 sm:p-7">
            <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.125px] text-[#a39e98]">
              Get in touch
            </p>

            <h3 className="text-[24px] font-bold leading-light tracking-[-0.5px] text-[#000000]">
              Mari ngobrol.
            </h3>

            <p className="mt-3 text-[14px] leading-[1.55] text-[#615d59]">
              Pilih cara yang paling nyaman untuk menghubungi saya.
            </p>

            <div className="mt-7 space-y-2">
              <a
                href="mailto:denisahendra123@gmail.com"
                className="group flex items-center gap-3 rounded-lg border border-[#e6e6e6] px-3.5 py-3 transition-colors hover:border-[#0075de] hover:bg-[#f6f5f4]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f6f5f4] text-[#0075de]">
                  <FiMail className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] text-[#a39e98]">Email</p>
                  <p className="truncate text-[14px] font-medium text-[#31302e]">
                    denisahendra123@gmail.com
                  </p>
                </div>
                <FiArrowUpRight className="ml-auto h-4 w-4 text-[#a39e98] transition-colors group-hover:text-[#0075de]" />
              </a>

              <a
                href="https://github.com/gutsznm"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-[#e6e6e6] px-3.5 py-3 transition-colors hover:border-[#0075de] hover:bg-[#f6f5f4]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f6f5f4] text-[#000000]">
                  <FiGithub className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[12px] text-[#a39e98]">GitHub</p>
                  <p className="text-[14px] font-medium text-[#31302e]">
                    @gutsznm
                  </p>
                </div>
                <FiArrowUpRight className="ml-auto h-4 w-4 text-[#a39e98] transition-colors group-hover:text-[#0075de]" />
              </a>

              <a
                href="https://linkedin.com/in/denisahendra"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-[#e6e6e6] px-3.5 py-3 transition-colors hover:border-[#0075de] hover:bg-[#f6f5f4]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f6f5f4] text-[#0075de]">
                  <FiLinkedin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[12px] text-[#a39e98]">LinkedIn</p>
                  <p className="text-[14px] font-medium text-[#31302e]">
                    /in/denisahendra
                  </p>
                </div>
                <FiArrowUpRight className="ml-auto h-4 w-4 text-[#a39e98] transition-colors group-hover:text-[#0075de]" />
              </a>
            </div>

            <div className="mt-7 border-t border-[#e6e6e6] pt-5">
              <p className="text-[13px] leading-normal text-[#a39e98]">
                Based in Indonesia
                <br />
                Available for remote & on-site opportunities.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-[#e6e6e6] bg-white p-6 sm:p-7">
            {submitted ? (
              <div className="flex min-h-97.5 flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f7eb] text-sticker-green">
                  <FiCheckCircle className="h-7 w-7" />
                </div>

                <h3 className="text-[24px] font-bold text-[#000000]">
                  Pesan terkirim.
                </h3>

                <p className="mt-2 max-w-sm text-[15px] leading-normal text-[#615d59]">
                  Terima kasih sudah menghubungi. Saya akan merespons pesan
                  kamu sesegera mungkin.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.125px] text-[#a39e98]">
                    Message
                  </p>
                  <h3 className="text-[24px] font-bold leading-tight tracking-[-0.5px] text-[#000000]">
                    Ceritakan project kamu.
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-[13px] font-medium text-[#31302e]"
                      >
                        Nama
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        placeholder="Nama kamu"
                        className="w-full rounded-lg border border-[#e6e6e6] bg-white px-3.5 py-2.5 text-[14px] text-[#000000] outline-none placeholder:text-[#a39e98] focus:border-[#0075de] focus:ring-2 focus:ring-[#0075de]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-[13px] font-medium text-[#31302e]"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        placeholder="nama@email.com"
                        className="w-full rounded-lg border border-[#e6e6e6] bg-white px-3.5 py-2.5 text-[14px] text-[#000000] outline-none placeholder:text-[#a39e98] focus:border-[#0075de] focus:ring-2 focus:ring-[#0075de]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-[13px] font-medium text-[#31302e]"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={7}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      placeholder="Ceritakan sedikit tentang project atau kebutuhan kamu..."
                      className="w-full resize-none rounded-lg border border-[#e6e6e6] bg-white px-3.5 py-3 text-[14px] leading-normal text-[#000000] outline-none placeholder:text-[#a39e98] focus:border-[#0075de] focus:ring-2 focus:ring-[#0075de]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0075de] px-5 py-3 text-base font-medium text-white transition-colors hover:bg-[#005bab] active:scale-[0.99]"
                  >
                    <FiSend className="h-4 w-4" />
                    Kirim Pesan
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}