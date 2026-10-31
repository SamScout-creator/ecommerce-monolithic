const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { notFound, errorHandler } = require('./middlewares/error');
const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Các API phải được khai báo ở đây
app.use('/health', require('./routes/health.routes'));
app.use('/auth', require('./routes/auth.routes'));
app.use('/products', require('./routes/product.routes'));
app.use('/orders', require('./routes/order.routes'));
app.use('/shipments', require('./routes/shipment.routes'));

// Các hàm xử lý lỗi bắt buộc phải nằm ở cuối cùng
app.use(notFound);
app.use(errorHandler);

module.exports = app;