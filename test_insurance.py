import unittest
from app import app

class TestInsuranceApp(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()

    def tearDown(self):
        pass  # Add teardown code if needed

    def test_index_route(self):
        # Test the index route
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'InsureTech Quote Generator', response.data)

    # Add more test methods as needed
