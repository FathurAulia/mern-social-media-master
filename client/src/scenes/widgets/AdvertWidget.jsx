import React, { useState } from "react";
import { Typography, useTheme, Button, TextField } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const [imageUrl, setImageUrl] = useState(
    "http://localhost:3001/assets/info4.jpeg"
  );
  const [caption, setCaption] = useState(
    "Your pathway to stunning and immaculate beauty and make sure your skin is exfoliating and shining like light."
  );
  const [company, setCompany] = useState("MikaCosmetics");
  const [website, setWebsite] = useState("mikacosmetics.com");
  const [isEditing, setIsEditing] = useState(false);

  const handleCreateAdClick = () => {
    setIsEditing(true);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageUrl(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    // Lakukan tindakan yang diperlukan untuk menyimpan perubahan
  };

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        {!isEditing && (
          <Typography
            color={medium}
            onClick={handleCreateAdClick}
            style={{ cursor: "pointer" }}
          >
            Create Ad
          </Typography>
        )}
      </FlexBetween>
      {isEditing ? (
        <>
          <input
            type="file"
            accept="image/*"
            id="upload-image"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <label htmlFor="upload-image">
            <Button
              variant="contained"
              component="span"
              color="primary"
              style={{ marginBottom: "1rem" }}
            >
              Upload Image
            </Button>
          </label>
          <TextField
            value={caption}
            onChange={handleCaptionChange}
            label="Caption"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            value={company}
            onChange={handleCompanyChange}
            label="Company"
            fullWidth
            variant="outlined"
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            value={website}
            onChange={handleWebsiteChange}
            label="Website"
            fullWidth
            variant="outlined"
            style={{ marginBottom: "1rem" }}
          />
          <Button variant="contained" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </>
      ) : (
        <>
          <img
            width="100%"
            height="auto"
            alt="advert"
            src={imageUrl}
            style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
          />
          <FlexBetween>
            <Typography color={main}>{company}</Typography>
            <Typography color={medium}>{website}</Typography>
          </FlexBetween>
          <Typography color={medium} m="0.5rem 0">
            {caption}
          </Typography>
        </>
      )}
    </WidgetWrapper>
  );
};

export default AdvertWidget;
