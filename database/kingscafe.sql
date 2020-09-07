-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Sep 2020 pada 19.40
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kingscafe`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `idCategory` int(11) NOT NULL,
  `nameCategory` varchar(64) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`idCategory`, `nameCategory`, `description`) VALUES
(1, 'Drinks', 'Berbagai Minuman Mulai Dari Coffe, jus, dll ada disini'),
(2, 'Desert', 'Desert Yang Tersedia disini adalah desert terbaik didunia'),
(3, 'Food', 'Makanan Terbaik didunia');

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `invoice` varchar(255) NOT NULL,
  `cashier` varchar(64) NOT NULL,
  `date` datetime NOT NULL,
  `orders` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `history`
--

INSERT INTO `history` (`id`, `invoice`, `cashier`, `date`, `orders`, `amount`) VALUES
(1, '2900129', 'alanard', '2020-08-06 21:28:41', 'coffe coffe dan coffe', 20000),
(2, 'ahjas1871', 'budibudian', '2020-08-06 21:28:41', 'bunga bunga dan bunga', 30000),
(4, '1214435SDFS324', 'Karina salim', '2020-09-03 23:05:34', 'Nasi goreng, mie goreng, Cappucino', 50000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `image` varchar(250) NOT NULL,
  `price` double NOT NULL,
  `idCategory` varchar(64) NOT NULL,
  `status` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id`, `name`, `image`, `price`, `idCategory`, `status`, `createdAt`, `updatedAt`) VALUES
(2, 'Expresso', 'https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/img-card/espresso.png', 10000, '1', 5, '2020-08-15 21:48:29', '2020-08-15 21:48:29'),
(3, 'Coffe Latte', 'https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/img-card/coffelatte.png', 15000, '1', 10, '2020-08-15 21:50:34', '2020-08-15 21:50:34'),
(7, 'Cappucino', 'https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/img-card/cappucino.png', 5000, '1', 10, '2020-08-15 21:56:01', '2020-08-15 21:56:01'),
(8, 'Red Velvet Latte', 'https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/img-card/redvelvet.png', 33000, '1', 10, '2020-08-15 21:56:58', '2020-08-15 21:56:58'),
(9, 'Wiener Schnitzel', 'https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/img-card/wiener.png', 69000, '2', 10, '2020-08-15 22:07:10', '2020-08-15 22:07:10'),
(10, 'Black Forest', 'https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/img-card/blackforest.png', 30000, '1', 10, '2020-08-15 22:08:09', '2020-08-15 22:08:09'),
(11, 'Chicken Katsu Dabu-dabu', 'https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/img-card/chickenkatsu.png', 60, '2', 10, '2020-08-15 22:00:18', '2020-08-15 22:00:18'),
(12, 'Salmon Truffle Teriyaki', 'https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/img-card/salmon.png', 69000, '1', 10, '2020-08-18 09:44:04', '2020-08-18 09:44:04'),
(13, 'Wiener Schnitzel', 'https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/img-card/wiener.png', 69, '2', 10, '2020-08-15 22:02:19', '2020-08-15 22:02:19'),
(14, 'Black Coffe', 'https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/img-card/cappucino.png', 10000, '1', 10, '2020-08-18 09:46:05', '2020-08-18 09:46:05'),
(65, 'roti bakar', 'http://localhost:4100/uploads/Image-2020-08-23T04-49-39.574Zblackforest.png', 12000, '2', 12, '2020-08-23 11:49:39', '2020-08-23 11:49:39'),
(76, 'black pink', 'http://localhost:4100/uploads/Image-2020-08-30T09-52-15.898Zredvelvet.png', 1234, '2', 2134, '2020-08-30 16:52:16', '2020-08-30 16:52:16'),
(77, 'Donat', 'http://localhost:4100/uploads/Image-2020-08-30T14-50-36.388Zchocorum.png', 20000, '2', 20, '2020-08-30 21:50:38', '2020-08-30 21:50:38'),
(78, 'Gelato', 'http://localhost:4100/uploads/Image-2020-08-30T14-51-09.951Zblackforest.png', 30000, '2', 20, '2020-08-30 21:51:10', '2020-08-30 21:51:10'),
(79, 'Cendol Dawet 3', 'http://localhost:4100/uploads/Image-2020-09-04T16-29-15.267Zchickenkatsu.png', 15000, '1', 20, '2020-09-04 23:29:15', '2020-09-04 23:29:15'),
(80, 'Ayam Bakar Kampung', 'http://localhost:4100/uploads/Image-2020-08-30T14-52-31.436Zwiener.png', 40000, '2', 20, '2020-08-30 21:52:32', '2020-08-30 21:52:32'),
(81, 'Bakso Setan', 'http://localhost:4100/uploads/Image-2020-08-30T14-53-27.762Zchickenkatsu.png', 15000, '2', 20, '2020-08-30 21:53:28', '2020-08-30 21:53:28'),
(82, 'HotDog', 'http://localhost:4100/uploads/Image-2020-08-30T14-53-53.669Zsalmon.png', 35000, '2', 20, '2020-08-30 21:53:53', '2020-08-30 21:53:53'),
(84, 'Cilok', 'http://localhost:4100/uploads/Image-2020-08-30T14-55-23.226Zsalmon.png', 5000, '2', 20, '2020-08-30 21:55:23', '2020-08-30 21:55:23'),
(85, 'Oreo', 'http://localhost:4100/uploads/Image-2020-08-30T14-59-57.610Zchocorum.png', 20000, '2', 30, '2020-08-30 21:59:58', '2020-08-30 21:59:58'),
(96, 'baru pisan', 'http://localhost:4100/uploads/Image-2020-08-30T15-32-59.801Zsalmon.png', 20000, '200', 400, '2020-08-30 22:32:59', '2020-08-30 22:32:59'),
(97, 'aaaaaaaa', 'http://localhost:4100/uploads/Image-2020-08-30T15-34-25.058Zsalmon.png', 2222, '2222', 222, '2020-08-30 22:34:25', '2020-08-30 22:34:25'),
(106, 'baruuuuuuuuuuu', 'http://localhost:4100/uploads/Image-2020-09-04T13-14-16.012Zsalmon.png', 10000, '121', 2, '2020-09-04 20:14:16', '2020-09-04 20:14:16');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `roleId` int(11) NOT NULL,
  `firstName` varchar(32) NOT NULL,
  `lastName` varchar(32) NOT NULL,
  `createdAt` int(11) NOT NULL DEFAULT current_timestamp(),
  `updatedAt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `roleId`, `firstName`, `lastName`, `createdAt`, `updatedAt`) VALUES
(1, 'alanard@gmail.com', '$2a$10$EIbmH1hzk8s5ptQY/OnJhOY1gZhUGSohtw3no4xD8MepckVFpZchW', 2, 'alan', 'ard', 2020, 2020),
(2, 'coba1@gmail.com', '$2a$10$X.DmFoEatBjCsmpaqqddoe1HWY5.DzHBmRsfVCEK77R5iVaZUYXFm', 2, 'coba', 'aja', 2020, 2020);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idCategory`);

--
-- Indeks untuk tabel `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `idCategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
