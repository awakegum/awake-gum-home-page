-- Enable insert for investors table (anyone can insert)
CREATE POLICY "Allow insert on investors" ON investors
FOR INSERT
WITH CHECK (true);

-- Enable insert for expenses table (anyone can insert)
CREATE POLICY "Allow insert on expenses" ON expenses
FOR INSERT
WITH CHECK (true);

-- Allow select on both tables
CREATE POLICY "Allow select on investors" ON investors
FOR SELECT
USING (true);

CREATE POLICY "Allow select on expenses" ON expenses
FOR SELECT
USING (true);
