-- Function to increment campaign raised amount
CREATE OR REPLACE FUNCTION increment_campaign_raised(campaign_id UUID, amount_to_add DECIMAL)
RETURNS VOID AS $$
BEGIN
  UPDATE public.campaigns
  SET raised_amount = raised_amount + amount_to_add,
      updated_at = NOW()
  WHERE id = campaign_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to increment user total donated
CREATE OR REPLACE FUNCTION increment_user_total_donated(user_id UUID, amount_to_add DECIMAL)
RETURNS VOID AS $$
BEGIN
  UPDATE public.profiles
  SET total_donated = total_donated + amount_to_add,
      updated_at = NOW()
  WHERE id = user_id;
  
  -- Create profile if it doesn't exist
  INSERT INTO public.profiles (id, total_donated, is_donor)
  VALUES (user_id, amount_to_add, TRUE)
  ON CONFLICT (id) DO UPDATE
  SET total_donated = profiles.total_donated + amount_to_add,
      updated_at = NOW();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
