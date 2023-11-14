'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SettingSwitch() {
  const pathname = usePathname();

  function toggleConfig() {
    let switcher = document.querySelector('.setting-switch');
    switcher.classList.toggle('open');
  }

  function colorSwitch(event) {
    document.querySelectorAll('.switch-color li').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const color = event.currentTarget.getAttribute('data-color');
    document.documentElement.style.cssText = `--maincolor: ${color};`;
  }

  return (
    <div className="setting-switch">
      <div className="mb-80">
        <h6 className="sub-title mb-30">Colors</h6>
        <ul className="switch-color">
          <li data-color="#55e6a5" className="active" onClick={colorSwitch}></li>
          <li data-color="#e8fe51" onClick={colorSwitch}></li>
          <li data-color="#f08f74" onClick={colorSwitch}></li>
          <li data-color="#d1d1d1" onClick={colorSwitch}></li>
          <li data-color="#55a3e6" onClick={colorSwitch}></li>
          <li data-color="#e69955" onClick={colorSwitch}></li>
        </ul>
      </div>
      <div>
        <h6 className="sub-title mb-30">Background Effect</h6>
        <ul className="switch-effect">
          <li className={pathname === '/home-main/' ? 'active' : ''}>
            <Link href="/home-main">Noise</Link>
          </li>
          <li className={pathname === '/home-dots-waves/' ? 'active' : ''}>
            <Link href="/home-dots-waves">Dots</Link>
          </li>
          <li className={pathname === '/home-liquid-bg/' ? 'active' : ''}>
            <Link href="/home-liquid-bg">Liquid</Link>
          </li>
          <li className={pathname === '/home-bg-img/' ? 'active' : ''}>
            <Link href="/home-bg-img">Image</Link>
          </li>
          <li className={pathname === '/home-solid/' ? 'active' : ''}>
            <Link href="/home-solid">Solid Color</Link>
          </li>
        </ul>
      </div>
      <span className="icon pe-7s-config" onClick={toggleConfig}></span>
    </div>
  )
}

export default SettingSwitch