import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import * as Icons from "pages/product/commons/Icons";
import "./styles.scss";
function Accessories(props) {
  const {
    product,
    onchangeValue,
    handleUploadImage,
    removeImage,
    actionSave,
    onChangeStatusValid,
  } = props;

  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidPrice, setIsInvalidPrice] = useState(false);
  const [isInvalidQuantity, setIsInvalidQuantity] = useState(false);
  const [isInvalidUnit, setIsInvalidUnit] = useState(false);

  useEffect(() => {
    if (actionSave) {
      if (!product.name) setIsInvalidName(true);
      if (!product.pricePerUnit) setIsInvalidPrice(true);
      if (!product.quantity) setIsInvalidQuantity(true);
      if (!product.unit) setIsInvalidUnit(true);
    }
  }, [actionSave]);

  useEffect(() => {
    if (product.name) setIsInvalidName(false);
  }, [product.name]);

  useEffect(() => {
    if (product.pricePerUnit) setIsInvalidPrice(false);
  }, [product.pricePerUnit]);

  useEffect(() => {
    if (product.quantity) setIsInvalidQuantity(false);
  }, [product.quantity]);

  useEffect(() => {
    if (product.unit) setIsInvalidUnit(false);
  }, [product.unit]);

  const onBlurUnit = () => {
    if (!product.unit) {
      onChangeStatusValid(true);
      setIsInvalidUnit(true);
    } else {
      onChangeStatusValid(false);
    }
  };

  const onBlurQuantity = () => {
    if (!product.quantity) {
      onChangeStatusValid(true);
      setIsInvalidQuantity(true);
    } else {
      onChangeStatusValid(false);
    }
  };

  const onBlurPrice = () => {
    if (!product.pricePerUnit) {
      onChangeStatusValid(true);
      setIsInvalidPrice(true);
    } else {
      onChangeStatusValid(false);
    }
  };

  const onBlurName = () => {
    if (!product.name) {
      onChangeStatusValid(true);
      setIsInvalidName(true);
    } else {
      onChangeStatusValid(false);
    }
  };

  const inputRef = useRef();
  const onOpenFile = () => {
    if (inputRef) inputRef.current.click();
  };
  const uploadFile = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    if (
      product.images.length + uploadedFiles.length > 5 ||
      uploadedFiles.length > 5
    ) {
      toastError("Ba??n chi?? ????????c cho??n t????i ??a 5 a??nh");
    } else {
      handleUploadImage(uploadedFiles);
    }
    e.target.value = "";
  };

  return (
    <React.Fragment>
      <div className="col-md-9">
        <div className="info-product-left">
          <div className="card info-product-left-01">
            <div className="title">Th??ng tin Linh ki???n</div>
            <div className="content">
              <div className="row">
                <div className="col-md-6">
                  <div className="field form-group">
                    <span style={{ color: "red", marginRight: "4px" }}>*</span>
                    <label className="control-label">T??n linh ki???n</label>
                    <div className="controls">
                      <input
                        className="input"
                        data-tip=""
                        data-for="_extends_popup_error"
                        name="name"
                        style={isInvalidName ? { border: "1px solid red" } : {}}
                        onBlur={() => onBlurName()}
                        value={product.name || ""}
                        onChange={(e) => onchangeValue("name", e.target.value)}
                        placeholder="Nh???p t??n linh ki????n"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="field form-group">
                    <span style={{ color: "red", marginRight: "4px" }}>*</span>
                    <label className="control-label">Gi?? </label>
                    <div className="controls">
                      <input
                        className="input"
                        data-tip=""
                        data-for="_extends_popup_error"
                        name="pricePerUnit"
                        style={
                          isInvalidPrice ? { border: "1px solid red" } : {}
                        }
                        onBlur={() => onBlurPrice()}
                        value={product.pricePerUnit || ""}
                        onChange={(e) =>
                          onchangeValue("pricePerUnit", e.target.value)
                        }
                        placeholder="Nh???p gia?? linh ki????n"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="field form-group">
                    <span style={{ color: "red", marginRight: "4px" }}>*</span>
                    <label className="control-label">S??? l?????ng</label>
                    <div className="controls">
                      <input
                        className="input"
                        data-tip=""
                        data-for="_extends_popup_error"
                        name="quantity"
                        style={
                          isInvalidQuantity ? { border: "1px solid red" } : {}
                        }
                        onBlur={() => onBlurQuantity()}
                        value={product.quantity || ""}
                        onChange={(e) =>
                          onchangeValue("quantity", e.target.value)
                        }
                        placeholder="Nh???p s???? l??????ng"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="field form-group">
                    <span style={{ color: "red", marginRight: "4px" }}>*</span>
                    <label className="control-label">????n v???</label>
                    <div className="controls">
                      <input
                        className="input"
                        data-tip=""
                        data-for="_extends_popup_error"
                        name="unit"
                        style={isInvalidUnit ? { border: "1px solid red" } : {}}
                        onBlur={() => onBlurUnit()}
                        value={product.unit || ""}
                        onChange={(e) => onchangeValue("unit", e.target.value)}
                        placeholder="Nh???p ????n vi??"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="field form-group">
                    <label className="control-label">M?? linh ki???n</label>
                    <div className="controls">
                      <input
                        className="input"
                        data-tip=""
                        data-for="_extends_popup_error"
                        name="code"
                        readOnly
                        value={product.code || ""}
                        onChange={(e) => onchangeValue("code", e.target.value)}
                        placeholder="Nh???p ma?? linh ki????n"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="field form-group">
                    <label className="control-label">M?? t???</label>
                    <div className="controls">
                      <textarea
                        name="description"
                        placeholder="Nh????p m?? t???"
                        value={product.description || ""}
                        onChange={(e) =>
                          onchangeValue("description", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="info-product-right-accessories-update">
          <div className="card info-product-right-01">
            <div className="title">???nh linh ki????n</div>
            {product.images && !product.images.length ? (
              <React.Fragment>
                <div className="content-image" onClick={() => onOpenFile()}>
                  <Icons.ImageProduct />
                </div>
                <div
                  className="text-center text-image"
                  onClick={() => onOpenFile()}
                >
                  B???m v??o ????y ????? th??m m???i ???nh
                </div>
                <input
                  type="file"
                  className="display-none"
                  ref={inputRef}
                  accept="image/*"
                  onChange={(e) => uploadFile(e)}
                  multiple
                />
              </React.Fragment>
            ) : (
              <div className="preview-image">
                <div className="image-input" onClick={() => onOpenFile()}>
                  <input
                    type="file"
                    className="display-none"
                    ref={inputRef}
                    accept="image/*"
                    onChange={(e) => uploadFile(e)}
                    multiple
                  />
                  <div className="add-upload">
                    <Icons.addImgIcon />
                  </div>

                </div>
                {product.images.map((image, index) => {
                  return (
                    <div className="div-send-img-file" key={index}>
                      <div className="div_send_img">
                        <button type="button" className="remove_image">
                          <span onClick={() => removeImage(index)}>&times;</span>
                        </button>
                        <img
                          className="img-file"
                          id={`img-${index}`}
                          alt="???nh"
                          src={image}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
Accessories.defaultProps = {};

export default React.memo(connect(null, null)(Accessories));
