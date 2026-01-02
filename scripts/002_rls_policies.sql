-- Campaigns policies
CREATE POLICY "Anyone can view active campaigns"
  ON public.campaigns FOR SELECT
  USING (status = 'active' OR auth.uid() = created_by);

CREATE POLICY "Authenticated users can create campaigns"
  ON public.campaigns FOR INSERT
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Campaign creators can update their campaigns"
  ON public.campaigns FOR UPDATE
  USING (auth.uid() = created_by);

CREATE POLICY "Campaign creators can delete their campaigns"
  ON public.campaigns FOR DELETE
  USING (auth.uid() = created_by);

-- Donations policies
CREATE POLICY "Users can view their own donations"
  ON public.donations FOR SELECT
  USING (auth.uid() = donor_id OR anonymous = FALSE);

CREATE POLICY "Anyone can create donations"
  ON public.donations FOR INSERT
  WITH CHECK (true);

-- Profiles policies
CREATE POLICY "Users can view all profiles"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Events policies
CREATE POLICY "Anyone can view events"
  ON public.events FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create events"
  ON public.events FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Event registrations policies
CREATE POLICY "Users can view their own registrations"
  ON public.event_registrations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can register for events"
  ON public.event_registrations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own registrations"
  ON public.event_registrations FOR DELETE
  USING (auth.uid() = user_id);
