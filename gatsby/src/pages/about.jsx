import React from "react";

export default function AboutPage() {
  return (
    <div className="group">
      <section id="picture">
        <img
          src="../img/profile_pic.jpeg"
          alt="Photograph of Collin Smith"
          className="profile-photo"
        />
      </section>
      <section id="text">
        <p>
          This is where I'll be blogging about my journey as I learn to code.
          The purpose is twofold:
          <ol type="1">
            <li>
              <em>Solidify my knowledge.</em> Summarizing and reviewing what I
              learn each day will force me to use active recall and help me
              remember it long term. Putting it in writing will force me to have
              a solid grasp of the material.
            </li>
            <li>
              <em>Document what I've learned.</em> This will provide a resource
              for me to refer back to later if I need to jog my memory about a
              topic, and for potential employers or contractors to see what I've
              learned.
            </li>
          </ol>
        </p>
        <p>
          If you like or want to respond to something I've written, don't
          hesitate to <a href="http://collinsmith.me/contact">let me know</a> by
          emailing or tweeting at me!
        </p>
      </section>
    </div>
  );
}
