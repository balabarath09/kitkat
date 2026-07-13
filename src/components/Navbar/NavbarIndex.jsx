import React, { useState } from 'react'
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { useLocation } from 'react-router-dom';

export default function NavbarIndex() {

    const location = useLocation();

    // Mobile Drawer
    const [open, setOpen] = useState(false);

    // Mobile Accordion
    const [openMenu, setMenuOpen] = useState(null);

    // Desktop Dropdown
    const [desktopMenu, setDesktopMenu] = useState(null);

    const handleDesktopMenu = (index) => {
        setDesktopMenu(desktopMenu === index ? null : index);
    };

    const menuArray = [
        {
            name: "Home",
            path: "/",
            subMenu: null,
        },
        {
            name: "Services",
            subMenu: [
                { name: "All Services", path: "/services/all-services" },
                { name: "Website Design & Development", path: "/services/web-design" },
                { name: "Website Application Development", path: "/services/web-app" },
                { name: "Customize Application Development", path: "/services/custom-app" },
                { name: "Domain & Web Hosting", path: "/services/domain-hosting" },
                { name: "Mobile Application Development", path: "/services/mobile-app" },
                { name: "Bulk SMS", path: "/services/bulk-sms" },
                { name: "Digital Marketing", path: "/services/digital-marketing" },
                { name: "Data Analyst", path: "/services/data-analyst" },
                { name: "SEO", path: "/services/seo" },
                { name: "Youtube & Insta Ads", path: "/services/youtube-instagram-ads" },
            ],
        },
        {
            name: "Training",
            subMenu: [
                { name: "All Training", path: "/training/all-training" },
                { name: "UI/UX", path: "/training/ui-ux" },
                { name: "Full Stack/MERN Stack", path: "/training/full-stack" },
                { name: "Mobile App", path: "/training/mobile-app" },
                { name: "Python", path: "/training/python" },
                { name: "PHP", path: "/training/php" },
                { name: "Node", path: "/training/node" },
                { name: "Java", path: "/training/java" },
                { name: "React", path: "/training/react" },
                { name: "Data Science", path: "/training/data-science" },
                { name: "Artificial Intelligence", path: "/training/artificial-intelligence" },
                { name: "Devops", path: "/training/devops" },
                { name: "Digital Marketing", path: "/training/digital-marketing" },
            ],
        },
        {
            name: "Products",
            subMenu: [
                { name: "All Products", path: "/products/all-products" },
                { name: "E-Commerce", path: "/products/ecommerce" },
                { name: "CRM", path: "/products/crm" },
                { name: "ERP", path: "/products/erp" },
                { name: "Biometric Based HRM", path: "/products/hrm" },
                { name: "School ERP", path: "/products/school-erp" },
                { name: "Gold Loan Management", path: "/products/gold-loan" },
                { name: "Matrimonial Website", path: "/products/matrimonial" },
                { name: "Medical Billing", path: "/products/medical-billing" },
                { name: "Mini Banking", path: "/products/mini-banking" },
            ],
        },
        {
            name: "Blog",
            path: "/blog",
            subMenu: null,
        },
        {
            name: "About Us",
            path: "/aboutus",
            subMenu: null,
        },
        {
            name: "Contact Us",
            path: "/contactus",
            subMenu: null,
        },
    ];
  return (
    <>
        <DesktopNavbar 
            menuArray = {menuArray} 
            location = {location}
            desktopMenu = {desktopMenu}
            setDesktopMenu = {setDesktopMenu}
            handleDesktopMenu = {handleDesktopMenu}
            />
        <MobileNavbar 
            menuArray = {menuArray} 
            location = {location}
            open = {open}
            setOpen = {setOpen}
            openMenu = {openMenu}
            setMenuOpen = {setMenuOpen}
        />
    </>
  )
}