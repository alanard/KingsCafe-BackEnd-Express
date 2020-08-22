-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Agu 2020 pada 15.01
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
(2, 'ahjas1871', 'budibudian', '2020-08-06 21:28:41', 'bunga bunga dan bunga', 30000);

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
(16, 'nasgor', 'nasgor.jpg', 16000, '1', 1, '2020-08-10 11:48:26', '2020-08-10 11:48:26'),
(24, 'asdasa', 'asdada', 1231, '12', 121, '2020-08-17 22:21:37', '2020-08-17 22:21:37'),
(25, 'asdasa', 'asdada', 1231, '12', 121, '2020-08-17 22:21:53', '2020-08-17 22:21:53'),
(26, 'asdada', 'asdadad', 1231, '121', 333, '2020-08-17 22:23:14', '2020-08-17 22:23:14'),
(27, 'asdada', 'asdadad', 1231, '121', 333, '2020-08-17 22:23:16', '2020-08-17 22:23:16'),
(28, 'asdada', 'asdadad', 1231, '121', 333, '2020-08-17 22:23:19', '2020-08-17 22:23:19'),
(29, 'asdada', 'asdadad', 1231, '121', 333, '2020-08-17 22:23:20', '2020-08-17 22:23:20'),
(30, 'asdadasd', 'asdadad', 1231, '11', 12, '2020-08-17 22:25:57', '2020-08-17 22:25:57'),
(33, 'asdadas', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLatte&psig=AOvVaw1NMEd7YNi0Q6ckqpS1B9wQ&ust=1597796435032000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPijt9u9o-sCFQAAAAAdAAAAABAD', 12123, '12', 123, '2020-08-18 07:21:02', '2020-08-18 07:21:02'),
(34, 'alan', 'asdad', 1231, '123', 123, '2020-08-18 07:21:23', '2020-08-18 07:21:23'),
(35, 'alanard', 'asdasddsa', 12311, '211', 112112, '2020-08-18 07:22:31', '2020-08-18 07:22:31'),
(36, 'kur kur', 'asdad', 11221, '12', 123, '2020-08-18 07:24:11', '2020-08-18 07:24:11'),
(39, 'Ayam Kampung', 'ayam akmsdnakjsd', 30000, '2', 2, '2020-08-18 09:11:16', '2020-08-18 09:11:16'),
(40, 'ayam bakar', 'awdada', 12313, '2', 22, '2020-08-18 09:13:25', '2020-08-18 09:13:25'),
(43, 'rotisaja', 'asdf;lkj', 10000, '1', 10, '2020-08-22 13:21:56', '2020-08-22 13:21:56'),
(44, 'rotisaja', 'asdf;lkj', 10000, '1', 10, '2020-08-22 13:32:10', '2020-08-22 13:32:10');

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
(1, 'alanard@gmail.com', '$2a$10$EIbmH1hzk8s5ptQY/OnJhOY1gZhUGSohtw3no4xD8MepckVFpZchW', 2, 'alan', 'ard', 2020, 2020);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
