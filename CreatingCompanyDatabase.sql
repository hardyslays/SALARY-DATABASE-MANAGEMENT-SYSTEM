/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/ Company /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE Company;

DROP TABLE IF EXISTS Employees;
CREATE TABLE `Employees` (
  `empId` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `empName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desg` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `resident` tinyint(1) NOT NULL,
  PRIMARY KEY (`empId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS SalarySlip;
CREATE TABLE `SalarySlip` (
  `EmpID` int(11) NOT NULL,
  `basic` int(11) DEFAULT NULL,
  `da` int(11) DEFAULT NULL,
  `hra` int(11) DEFAULT NULL,
  `ta` int(11) DEFAULT NULL,
  `Commision` int(11) DEFAULT NULL,
  `Allowances` int(11) DEFAULT NULL,
  `perq` int(11) DEFAULT NULL,
  `retire` int(11) DEFAULT NULL,
  `gross` int(11) DEFAULT NULL,
  `net` int(11) DEFAULT NULL,
  PRIMARY KEY (`EmpID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;