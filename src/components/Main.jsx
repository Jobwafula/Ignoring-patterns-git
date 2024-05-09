import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <main className='pl-[7rem]'>
        <section className="mb-8  text-2xl">
          <h3 className="text-[3rem] font-semibold mb-2">1. Introduction</h3>
          <p>Clone  the Repository below from github.</p>
          <a className='text-blue-500 underline' href='https://github.com/Jobwafula/Ignoring-patterns-git'>Repository</a>
          <p>Run command.</p>
          <code className='bg-gray-200 p-2'>npm install</code>
        </section>
        <section className="mb-8 text-2xl">
          <h3 className="text-[3rem] font-semiboldtext-2xl mb-2">2.Add any file of your choice with some content.</h3>
          <p>Run the command below to see the status of git repo.</p>
          <code className='bg-gray-200 p-2'>git status</code>
          <p>You will be able to see the file you've added is unstaged.</p>
        </section>
        <section className="mb-8 text-2xl">
          <h3 className="text-[3rem] font-semibold mb-2">3. Stage the files</h3>
          <p>Run the following command to stage the changes.</p>
          <code className='bg-gray-200 p-2'>git add .</code>
        </section>
        <section className="mb-8 text-2xl">
          <h3 className="text-[3rem] font-semibold mb-2">4. Check Status</h3>
          <p>Run <code className='bg-gray-200 p-2'>git status</code> command again.</p>
          <p>The changes should be staged by now.</p>
        </section>
        <section className="mb-8 text-2xl">
          <h3 className="text-[3rem] font-semibold mb-2">5. Unstage the changes</h3>
          <p>Run the following command.</p>
          <code className='bg-gray-200 p-2'>git restore --staged fileName</code>
          <p>By this ,you've achieved preventing unintentional staging.</p>
        </section>
      </main>
  )
}
