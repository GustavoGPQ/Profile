"use client"; 
import "../styles/global.css";
import Image from "next/image";


function Page() {
  return (
    <>
      <main>
      <section className="container">
       <div className="Card">
       <Image
        src="/Avatar.png"
        alt="Avatar"
        width={150}
        height={150}
      />
      <h1>.Kobayashi dev</h1>
          <nav>
            <ul >
              <li>
                <button
                  onClick={() => (window.location.href = "https://github.com/GustavoGPQ")}
                >
                  GitHub
                </button>
              </li>
              <li>
                <button
                  onClick={() => (window.location.href = "https://discord.gg/CZXrtPW7vX")}
                >
                  Contato
                </button>
              </li>
              <li>
                <button
                  onClick={() => (window.location.href = "https://discord.gg/N8JdGkbV")}
                >
                  RedeMultiverse
                </button>
              </li>
            </ul>
          </nav>
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;

