import React from "react";
import { FaChartLine, FaClipboardList, FaUser } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { motion } from "framer-motion";
import dayjs from "dayjs";

const AdminDashboard = () => {
  // 🔧 Hardcoded dummy values
  const totalSales = 15499.99;
  const totalOrders = 15;
  const totalProducts = 42;
  const totalUsers = 120;

  // 🔧 Dummy orders
  const orders = [
    {
      _id: "order1",
      user: { userName: "John Doe" },
      createdAt: new Date().toISOString(),
      paymentMethod: "Card",
      paymentStatus: "Paid",
      orderStatus: "Delivered",
      totalAmount: 199.99,
      items: [
        {
          product: { name: "Apples", variants: [{ price: 50 }] },
          quantity: 2,
          selectedVariant: { price: 45 },
        },
        {
          product: { name: "Milk", variants: [{ price: 30 }] },
          quantity: 1,
          selectedVariant: null,
        },
      ],
    },
    {
      _id: "order2",
      user: { userName: "Jane Smith" },
      createdAt: new Date().toISOString(),
      paymentMethod: "Cash on Delivery",
      paymentStatus: "Unpaid",
      orderStatus: "Processing",
      totalAmount: 89.5,
      items: [
        {
          product: { name: "Bread", variants: [{ price: 35 }] },
          quantity: 1,
          selectedVariant: null,
        },
        {
          product: { name: "Eggs", variants: [{ price: 10 }] },
          quantity: 6,
          selectedVariant: null,
        },
      ],
    },
  ];

  return (
    <main className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Grocery Admin Dashboard
      </h1>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <OverviewCard
          title="Total Sales"
          value={`₹${totalSales.toFixed(2)}`}
          icon={<FaChartLine />}
          color="#4CAF50"
        />
        <OverviewCard
          title="Total Orders"
          value={totalOrders}
          icon={<FaClipboardList />}
          color="#2196F3"
        />
        <OverviewCard
          title="Total Products"
          value={totalProducts}
          icon={<MdInventory />}
          color="#FF9800"
        />
        <OverviewCard
          title="Customers"
          value={totalUsers}
          icon={<FaUser />}
          color="#9C27B0"
        />
      </div>

      {/* Dummy Orders */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Today’s Orders</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.length === 0 ? (
            <p>No orders today.</p>
          ) : (
            orders.map((order) => (
              <motion.div
                key={order._id}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-300"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">
                    {order.user?.userName || "Unknown"}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {dayjs(order.createdAt).format("MMM D, YYYY h:mm A")}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-2">
                  Order ID:{" "}
                  <span className="font-mono">
                    {order._id.slice(0, 8)}...
                  </span>
                </p>

                <p className="text-sm mb-3">
                  Payment Method:{" "}
                  <span className="font-medium">{order.paymentMethod}</span>
                </p>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold mb-1">Products:</h4>
                  <ul className="list-disc list-inside max-h-32 overflow-auto text-sm text-gray-700">
                    {order.items.map(({ product, quantity, selectedVariant }, idx) => (
                      <li key={idx}>
                        {product.name} - {quantity} × ₹
                        {selectedVariant?.price || product.variants[0].price}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-bold text-lg mb-2">
                  Total: ₹{order.totalAmount.toFixed(2)}
                </p>

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      order.paymentStatus === "Paid" &&
                      order.orderStatus !== "Cancelled"
                        ? "bg-green-100 text-green-800"
                        : order.orderStatus === "Cancelled"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                >
                  {order.paymentStatus} / {order.orderStatus}
                </span>
              </motion.div>
            ))
          )}
        </div>
      </section>
    </main>
  );
};

// 📦 Card component for stats
const OverviewCard = ({ title, value, icon, color }) => (
  <div
    className="p-4 rounded shadow flex items-center justify-between"
    style={{ backgroundColor: color, color: "#fff" }}
  >
    <div className="text-3xl">{icon}</div>
    <div className="text-right">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default AdminDashboard;
